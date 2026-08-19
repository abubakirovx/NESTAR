import { Resolver,Query } from "@nestjs/graphql";

@Resolver()
export class AppResolver{
    @Query(()=>String)
    public sayHello():string{
        console.log("Query : SayHello");
        
        return "GraphQl Api Server"
    }
    
}