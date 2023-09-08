const project ={
    name: 'project',
    title: 'Project',
    type: 'document',
    fields:[
    {
        name:"name",
        title:"Name",
        type:"string",
    },
    {
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"name",
            maxLength:90,
        }
    },
    {
        name:"image",
        title:"Image",
        type:"image",
        options:{
            hotspot:true,
        }
    },
    {
        name:"description",
        title:"Description",
        type:"text",
    },
    {
        name:"link",
        title:"Link",
        type:"url",
    },
    ]}
export default project