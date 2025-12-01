interface ProjectImage {
    id: string;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails?: {
      small: { url: string };
      large: { url: string };
      full?: { url: string };
    };
  }
  
  export interface Project {
    id: string;
    fields: any;
    createdTime: string;
  }
  
// Alternative approach - filter in JavaScript instead of Airtable formula
export default async function fetchProjects({ category }: { category?: string } = {}): Promise<Project[]> {
  const apiKey=Bun.env.API_KEY;
  const baseId=Bun.env.BASE_ID;   
  const Airtable = require('airtable');
    const base = new Airtable({
      apiKey,
    }).base(baseId);
  
    // Get category ID if category slug is provided
    let categoryId: string | null = null;
    if (category) {
      try {
        const categories = await base('Category')
          .select({
            filterByFormula: `{Slug} = "${category}"`,
            maxRecords: 1
          })
          .all();
  
        if (categories && categories.length > 0) {
          categoryId = categories[0].id;
          // console.log(`Found category ID: ${categoryId} for slug: ${category}`);
        } else {
          // console.log(`No category found with slug: ${category}`);
          return [];
        }
      } catch (error) {
        console.error('Error fetching category:', error);
        return [];
      }
    }
  
    // Fetch all published projects and filter in JavaScript
    const selectOptions: any = {
      maxRecords: 100,
      view: 'Grid view',
      filterByFormula: '{Publish} = "Yes"' // Only filter by publish status in Airtable
    };
  
    return new Promise((resolve, reject) => {
      const recordsList: Project[] = [];
  
      base('Projects')
        .select(selectOptions)
        .eachPage(
          function page(records: any[], fetchNextPage: () => void) {
            // console.log(`Processing ${records.length} published records`);
            
            if (records.length > 0) {
              // console.log('Available fields:', Object.keys(records[0].fields));
              // console.log('Sample Category field:', records[0].fields.Category);
            }
            
            records.forEach(record => {
              // If we're filtering by category, check if this record matches
              if (categoryId) {
                const recordCategories = record.fields.Category || [];
                if (!recordCategories.includes(categoryId)) {
                  return; // Skip this record if it doesn't match the category
                }
              }
  
              recordsList.push({
                id: record.id,
                fields: {
                  ...record.fields,
                  'Cover Image': record.fields['Cover Image'] || [],
                  Gallery: record.fields.Gallery || [],
                  Services: record.fields.Services || [],
                  Category: record.fields.Category || [],
                  Featured: record.fields.Featured === "Yes",
                  Publish: record.fields.Publish === "Yes",
                },
                createdTime: record._rawJson.createdTime,
              });
            });
  
            // console.log(`Records matching category filter: ${recordsList.length}`);
            fetchNextPage();
          },
          function done(err: Error | null) {
            if (err) {
              console.error('Error fetching projects:', err);
              reject(err);
              return;
            }
  
            // console.log(`Final filtered record count: ${recordsList.length}`);
            resolve(recordsList);
          }
        );
    });
  }