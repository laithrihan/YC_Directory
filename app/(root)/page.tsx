/* eslint-disable @typescript-eslint/no-unused-vars */
import SearchForm from "../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../components/StartupCard";


export default async function Home({searchParams,}: {searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts =[
    {
      _createdAt:new Date(),
      views:55,
      author:{
              _id:1 ,
              name:'Mike' ,
              image :"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
      _id:1,
      description:'this is the discriotios',
      image:'https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category:'Robots',
      title:'We Robots',
    }
  ] 

  return (
    <div>
      <section className=" pink_container">
      <h1 className="heading">
          Pitch Your Startup, <br/>Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query}/>
      </section>
      
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard , index:number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
