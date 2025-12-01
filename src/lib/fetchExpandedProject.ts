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

export default async function fetchExpandedProject({ project }: { project: string }): Promise<Project | null> {
   const apiKey=Bun.env.API_KEY;
   const baseId=Bun.env.BASE_ID;  
  const Airtable = require('airtable');
    const base = new Airtable({
      apiKey,
    }).base(baseId);
  
    try {
      // First, fetch the project
      const projects = await base('Projects')
        .select({
          filterByFormula: `AND({Slug} = "${project}", {Publish} = "Yes")`,
          maxRecords: 1
        })
        .all();
  
      if (projects && projects.length > 0) {
        const record = projects[0];
        // console.log(`Found project: ${record.fields.Name} with slug: ${project}`);
        
        // Fetch services details if they exist
        let servicesDetails = [];
        if (record.fields.Services && record.fields.Services.length > 0) {
          const serviceIds = record.fields.Services;
          // console.log('Fetching services for IDs:', serviceIds);
          
          // Fetch all services in one call
          const services: any = await base('Services') // Adjust table name if different
            .select({
              filterByFormula: `OR(${serviceIds.map((id: any) => `RECORD_ID() = "${id}"`).join(', ')})`,
            })
            .all();
          
          servicesDetails = services.map((service: any) => ({
            id: service.id,
            fields: service.fields
          }));
          
          // console.log('Services details:', servicesDetails);
        }
        
        // Similarly fetch category details
        let categoryDetails = [];
        if (record.fields.Category && record.fields.Category.length > 0) {
          const categoryIds = record.fields.Category;
          const categories: any = await base('Category')
            .select({
              filterByFormula: `OR(${categoryIds.map((id: any) => `RECORD_ID() = "${id}"`).join(', ')})`,
            })
            .all();
          
          categoryDetails = categories.map((cat: any) => ({
            id: cat.id,
            fields: cat.fields
          }));
        }
        
        return {
          id: record.id,
          fields: {
            ...record.fields,
            'Cover Image': record.fields['Cover Image'] || [],
            Gallery: record.fields.Gallery || [],
            Services: servicesDetails, // Full service objects instead of just IDs
            Category: categoryDetails, // Full category objects instead of just IDs
            Featured: record.fields.Featured === "Yes",
            Publish: record.fields.Publish === "Yes",
          },
          createdTime: record._rawJson.createdTime,
        };
      } else {
        // console.log(`No published project found with slug: ${project}`);
        return null;
      }
    } catch (error) {
      // console.error('Error fetching project:', error);
      return null;
    }
  }