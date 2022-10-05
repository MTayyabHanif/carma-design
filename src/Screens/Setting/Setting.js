import React, { useState, useCallback } from "react";
import { Button, Card, Stack, RadioButton, Text, TextField, ContextualSaveBar, Frame, Layout, Page, Link, ButtonGroup,SettingToggle,TextStyle } from "@shopify/polaris";


const Setting = () => {

  const [treeNumber, setTreeNumber] = useState(0)
  const [productNumber, setProductNumber] = useState(0)
  const [treeAmount, setTreeAmount] = useState("10.00")
  const [orderValue, setOrderValue] = useState(0)
  const [status,setStatus]=useState(true)
  const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);
  const [active, setActive] = useState(false);
  const handleToggle = useCallback(() => setActive((active) => !active), []);
  const contentStatus = active ? 'Deactivate' : 'Activate';
  const textStatus = active ? 'activated' : 'deactivated';
const Status=()=>{
setStatus(!status)
}



  const handleFirstButtonClick = useCallback(() => {
    if (isFirstButtonActive) return;
    setIsFirstButtonActive(true);
  }, [isFirstButtonActive]);

  const handleSecondButtonClick = useCallback(() => {
    if (!isFirstButtonActive) return;
    setIsFirstButtonActive(false);
  }, [isFirstButtonActive]);

  return (
    <>
    
      <Page
      fullWidth
      title="Carma Setting"
      primaryAction={{content: 'Save', disabled: false}}
      divider
      >

   
      <Layout>
      
        <Layout.Section  oneHalf >
          
          
          <SettingToggle
      action={{
        content: contentStatus,
        onAction: handleToggle,
      }}
      enabled={active}
    >
      Carma is <TextStyle variation="strong">{textStatus}</TextStyle> and working in your store.
    </SettingToggle>
            {/* <Stack>
              <Stack.Item fill> <Text> Carma is {status===false?"Deactivated":"Activated"} and working in your store.</Text></Stack.Item>
              <Stack.Item ><Button primary onClick={Status}>{status===true?"Deactivate":"Activate"}</Button></Stack.Item>
            </Stack> */}
         
         
        </Layout.Section>
      

        <Layout.Section  oneHalf >

          <Card title="Chose location of trees" sectioned>

            <ButtonGroup segmented spacing="extraTight" >


              <div>

                <table border="0" cellSpacing="0" cellPadding={0} >
                <tbody>
                  <tr>
                    <td style={{ width: "334px" }}>
                      <Button size="large" fullWidth={5} textAlign="left" pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
                        <Text color={isFirstButtonActive === true ? "success" : ""} fontWeight="medium" >
                          UK TREE
                        </Text>
                        <Text as="span" fontWeight="regular" variant="bodySm" color={isFirstButtonActive === true ? "success" : ""}>
                          £5 per tree
                        </Text>
                      </Button>
                    </td>

                    <td style={{ width: "334px" }}>
                      <Button size="large" fullWidth={5} textAlign="right" pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
                        <Text color={isFirstButtonActive === false ? "success" : ""} fontWeight="medium" as="p" >
                          OFFSHORE TREE
                        </Text>
                        <Text as="span" fontWeight="regular" variant="bodySm" color={isFirstButtonActive === false ? "success" : ""}>
                          £0.25 per tree
                        </Text>
                      </Button>
                    </td>



                  </tr>
                  </tbody>
                </table>
              </div>




            </ButtonGroup>


          </Card>


        </Layout.Section>

        <Layout.Section oneHalf secondary  >
          <Card title="Who is paying" sectioned>
            <Stack vertical>
              <RadioButton
                label="Customer"
                helpText="Allow customers to opt in and pay a little extra and we collect that exact amount from  you at the end of your billing cycle"

              />
              <RadioButton
                label="Merchant"
                helpText="Make your orders carbon neutral by paying on behalf of your customers"

              />
            </Stack>
          </Card>

        </Layout.Section>
        <Layout.Section oneHalf secondary >
          <Card title="Limit number of trees sold per month" sectioned>
            <Stack spacing="extraTight">
              <Stack.Item fill>
                <Stack.Item>
                  <Text truncate>Adjust the maximum number of trees per month</Text>
                </Stack.Item>
                <Stack>
                  <Stack.Item>
                    <Text>= 150 tonnes of CO2e</Text>
                  </Stack.Item>
                  <Stack.Item>
                    <Text>= £125/month</Text>
                  </Stack.Item>
                </Stack>

              </Stack.Item>
              <Stack.Item>
                <div style={{ width: "213px" }}>
                  <TextField type="number" value={treeNumber} onChange={(v) => { setTreeNumber(v) }} min={0} />
                </div>
              </Stack.Item>
            </Stack>
          </Card>

        </Layout.Section>
        <Layout.Section oneHalf secondary>
          <Card title="How you want to plant trees" sectioned>
            <Stack vertical>
              <Stack>
                <Stack.Item fill>
                  <Text truncate>For every product bought, plant selected <br /> number of trees per product sold</Text>
                </Stack.Item>
                <Stack.Item>
                  <div style={{ width: "213px" }}>
                    <TextField type="number" value={productNumber} onChange={(v) => { setProductNumber(v) }} min={0} />
                  </div>
                </Stack.Item>
              </Stack>
              <Stack spacing="extraTight">
                <Stack.Item fill>
                  <Text truncate>Plant selected amount of trees every time an order is placed</Text>
                </Stack.Item>
                <Stack.Item>
                  <div style={{ width: "213px" }}>
                    <TextField type="number" value={treeAmount} onChange={(v) => { setTreeAmount(v) }} prefix="£" autoComplete="10.00" min={0} />
                  </div>
                </Stack.Item>

              </Stack>
              <Stack>
                <Stack.Item fill>
                  <Text truncate>Plant selected number of trees on order value.<br />Ex: plant 10 trees in £10 order value </Text>
                </Stack.Item>
                <Stack.Item>
                  <div style={{ width: "213px" }}>
                    <TextField type="number" value={orderValue} onChange={(v) => { setOrderValue(v) }} min={0} />
                  </div>
                </Stack.Item>
              </Stack>
            </Stack>
          </Card>
        </Layout.Section>


      </Layout>
      <div className="divider" />
      <Layout >
        <Layout.Section oneHalf >
          <Stack spacing="extraTight">
            <Stack spacing="extraTight">
              <Stack.Item>
                <Text>Add a progress to you store.</Text>
              </Stack.Item>
              <Stack.Item>
                <Link>See our widget documentation</Link>
              </Stack.Item>
            </Stack>
            <Stack spacing="extraTight">
              <Stack.Item>
                <Text>Do you want to earn commission based on high volume?</Text>
              </Stack.Item>
              <Stack.Item>
                <Link>Learn more about commission</Link>
              </Stack.Item>
            </Stack>
          </Stack>
        </Layout.Section>
      </Layout>
      
</Page>
      </>
  )
}

export default Setting