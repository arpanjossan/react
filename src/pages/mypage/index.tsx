import { Session } from "inspector";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getServerSideProps(context:any) {
  // Fetch data for a specific slug from an API
  console.log(context.query, "00000000000000000000");

  return { props: { data: context.query } };
}
function Mypage(data:any ) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only execute this code on the client-side
      localStorage.setItem("arpan", "name");
      sessionStorage.setItem("arpan", "name");
    }
  }, []);
  const add = () => {
    console.count("add");
  };
  // const handleInput = (e:any ) => throttle(loggerFunc , 100)

  // const loggerFunc = () => {
  //   console.count("Throttled Function");
  // }
  
  // const throttle = (fn, limit) => {
  //   let flag = true;
  //   return function(){
  //     let context = this;
  //     let args = arguments;
  //     if(flag){
  //       fn.apply(context, args);
  //       flag = false;
  //       setTimeout(() => {
  //         flag=true;
  //       }, limit);
  //     }
  //   }
  // }

  return (
    <div>
      {data.page} 9999999999999 {data.nftType}
      {/* <input type="text" onChange={(e)=>handleInput(e)} /> */}
    </div>
  );
}

export default Mypage;
