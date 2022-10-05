import React from "react";
import { Card,Button,Text,Stack,Page,Layout } from "@shopify/polaris";
import "../../App.css"
import {useNavigate} from "react-router-dom"
const Landing=()=>{
const navigate=useNavigate()

return(
    
    <Page narrowWidth>
    <Layout>
    
    
    <Layout.Section fullWidth>
   
        <img src="logo.png" className="logo" />
        
    </Layout.Section>
    
    <Layout.Section>
    <div className="card" >
    <Card  sectioned >
    <div style={{paddingLeft:"22px",paddingRight:"22px"}}>
    <div style={{paddingTop:"60px"}}>
    <Text alignment="center" as="h5" variant="headingXl" fontWeight="bold"  >Welcome to Carma Family</Text>
    </div>
    <div style={{paddingTop:"9px"}}>
    <Text alignment="center" as="p" variant="bodyMd" fontWeight="medium" color="#6D7175" >Carma helps users to better understand their personal impact on the environment<br />
                    and provides effortless solutions to reduce this impact.</Text></div>
      <div className="imageContainer">              
    <img src="carma-cover.png" className="cover-image"  alt="cover picture" />
    </div>
    <Text alignment="center" as="p" variant="bodyMd">With every transaction you can plant trees and provide employment to<br/> 
Veterans in the UK or improvides communities across the globe.</Text>
<div className="button">
    <Button primary onClick={()=>{navigate("/setting")}}>Get Started</Button>
</div>
<div style={{paddingTop:"16.5px"}}>
<Text alignment="center" variant="bodyMd" >By clicking Get Started you are agreeing to the Carma <a href="" style={{color:"#6D7175"}}>Terms and Conditions.</a></Text>
</div>

</div>
    </Card>
    </div>
   
</Layout.Section>
 
    </Layout>
    </Page>
        
   
)
}
export default Landing