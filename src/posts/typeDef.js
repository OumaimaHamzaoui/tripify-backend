export const typeDef = `
            type Post {
                title: String,
                description: String,
                photos:[photo],
                date:String,
                budget:String,
                transport:String,
                accommodation:String,
                access:String,
                gastronomy:String,
                 
            }
            input PostInput {
                title: String,
                description: String,
                photos:[photo],
                date:String,
                budget:String,
                transport:String,
                accommodation:String,
                access:String,
                gastronomy:String, 
            }
            
`;