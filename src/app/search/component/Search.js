
import Image from "next/image";
import React, {useState,useEffect } from 'react'
import { useSearchParams } from "next/navigation";

const Search = () => {
    const [images, setImages] = useState([]);
        const [loading,setLoading]=useState(false)

        const searchParam=useSearchParams()
        const query=searchParam.get('query')
        const apiKey = "c5663761";

         
      
          useEffect(() => {
             const fetchImages = async () => {

setLoading(true)

            try {
              const response = await fetch(
              `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
      
              if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
              const data = await response.json();
              setImages(data|| {});
              
              console.log(data)
              console.log(data)
    
            } catch (error) {
    console.log("Error fetching OMDb images:", error);
    setImages({ Response: "False" }); 
  } finally {
    setLoading(false);
  }
          };
            fetchImages(query);
            setLoading(true)
          }, [query]);
         
    
       const [popUp,setPopUp]=useState(null)
          const [showModal,setShowModal]=useState(false)
      
      const showPopUp=(item)=>{
      setShowModal(true)
        setPopUp(item)
      }


     
  return (
    <main className="relative">  
<section className="flex flex-col items-center justify-center container py-5 bg-gray-300 h-70 md:py-20">{loading?<h3>Searching  for <span className="text-gray-500">&quot;{ query.charAt(0).toUpperCase()+query.slice(1)}&quot;</span> </h3>
:<h3>Search Results for <span className="text-gray-500">&quot;{ query.charAt(0).toUpperCase()+query.slice(1)}&quot;</span> </h3>
}
</section>
  <section className='w-full mb-10 container py-5 grid gap-6  md:py-0 '>
 <div className="grid gap-6 md:-mt-8 md:grid-cols-2  lg:grid-cols-3  md:container">
   {images.Search?.map((item) => (
  <div key={item.
    imdbID
    } className='rounded bg-black opacity-5' onClick={(()=>{
      showPopUp(item)
    })}>
             <div className='relative rounded overflow-hidden cursor-pointer transition hover:opacity-40'>
  <div className="overflow-hidden md:max-h-[500px] ">
  {item.Poster && item.Poster !== "N/A" ? (
  <Image
  height={300}
  width={300}
  src={item.Poster}
  alt={item.Title}
  className="w-full h-full object-cover"
/>
) : (
  <div className="w-full h-[450px] flex items-center justify-center bg-gray-200 text-gray-500">
    No Image Available
  </div>
)}
  
</div>
               
               {/* Dark Overlay */}
               <div className='absolute inset-0 bg-black opacity-30'></div>
   
               {/* Text on Image */}
               <div className='absolute inset-0 flex flex-col justify-end p-4 text-white'>
                 <p className='text-lg font-semibold'>{item.Title}</p>
                 <p className='text-sm'> {item.Year|| "year not provided"} </p>
               </div>
             </div>
           </div>
         ))}
       </div>
       </section>
    
    {/* loading container while fetching */}
      {loading==true&&images.length < 1 ?  <div className="container">
<div className="grid gap-6 md:-mt-8 md:grid-cols-2  lg:grid-cols-3 md:container">

       
{Array.from({length:6}).map((_,index)=>{
 return <div className="bg-gray-200 animate-pulse rounded-lg p-4 w-full pt-10" key={index}>
  <div className="h-24 w-full rounded-md"></div>
  <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
  <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>

</div>
})}
</div>
</div>:""}

{!loading && images.Response === "False" && (
  <div className="flex items-center justify-center text-black font-bold">
    Oops! No result for &quot;{query}&quot;
  </div>
)}

             
             {/* pop up modal here ejeh */}
   {showModal && popUp && 
   <div 
     className={`fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-30 transition-all duration-300 ${
       showModal ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
     }`}
     
     >
   
     <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
   
     <div className="transition z-20 max-w-2xl w-full px-5 relative md:px-0">
     <button className="mt-4 px-4 text-gray-200 bg-transparent text-lg text-white absolute right-4 mb-6 -top-5 md:-right-10  md:top-3 lg:-right-20" onClick={() => setShowModal(false)} >
       x
      </button>
       
       {popUp.Poster && popUp.Poster !== "N/A" ? (
 
<Image
         height={500} 
         width={700}  
         src={popUp?.Poster}
         alt={popUp?.Title}
         className="w-full object-cover rounded-tr-lg rounded-tl-lg max-h-[500px] shadow-xl mt-5 mb:mt-8"
       />
) : (
  <div className="w-full h-[450px] flex items-center justify-center bg-gray-200 text-gray-500">
    No Image Available
  </div>
)}
   
       <div className=" p-4 bg-white mb-5 rounded-br-lg rounded-bl-lg">
         <h3 className=" font-semibold text-black">Title: {popUp?.Title}</h3>
         <p className="text-sm text-black">
          Release date: {popUp?.Year || "Year not provided"}
         </p>
       </div>
     </div>
   </div>}
    
       </main>
  )
}

export default Search