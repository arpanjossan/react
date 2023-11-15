import Router from 'next/router';
import React from 'react'

export async function getServerSideProps({ params }:any) {
    // Fetch data for a specific slug from an API
    console.log(params ,"00000000000000000000");
    
   
  
    return { props: { data:params } };
  }

function Slug ({data}:any) {
  return (
    <div>{data} kkkkkkkkkkkkkkkkk</div>
  )
}

export default Slug