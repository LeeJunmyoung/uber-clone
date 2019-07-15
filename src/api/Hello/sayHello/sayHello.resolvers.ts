import { Greeting } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello:  () : Greeting => {
            return {
                error : false,
                text: "love u"
            }
        }
    }
};

export default resolvers;