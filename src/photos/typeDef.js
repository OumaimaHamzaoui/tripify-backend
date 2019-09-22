  
export const typeDef = `
            type Photo {
                id: ID
                url: String
                user: User
            }
            input PhotoInput {
                id: ID
                url: String
                user: ID
            }
            
`;
