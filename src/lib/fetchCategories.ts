  export default async function fetchCategories(): Promise<any[]> {
    const apiKey=Bun.env.API_KEY;
    const baseId=Bun.env.BASE_ID;
    const Airtable = require('airtable');
    const base = new Airtable({
      apiKey,
    }).base(baseId );
  
    const selectOptions: any = {
      maxRecords: 100,
      view: 'Grid view',
    };

    let filterFormula = '{Publish} = "Yes"';

    selectOptions.filterByFormula = filterFormula;
  
    return new Promise((resolve, reject) => {
      const recordsList: any[] = [];
  
      base('Category')
        .select(selectOptions)
        .eachPage(
          function page(records: any[], fetchNextPage: () => void) {
            // console.log(`Processing ${records.length} records in this page`);
            
            // if (records.length > 0) {
            //   console.log('Available fields:', Object.keys(records[0].fields));
            // }
            
            // Process each record
            records.forEach(record => {
              recordsList.push({
                id: record.id,
                fields: {
                  ...record.fields,
                },
                createdTime: record._rawJson.createdTime,
              });
            });
  
            // console.log(`Total records so far: ${recordsList.length}`);
            fetchNextPage();
          },
          function done(err: Error | null) {
            if (err) {
              console.error('Error fetching categories:', err);
              reject(err);
              return;
            }
  
            // console.log(`Final record count: ${recordsList.length}`);
            resolve(recordsList);
          }
        );
    });
  }