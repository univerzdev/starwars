import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";

import RelatedResourceList from "./RelatedResourceList";

const Tabs = (props) => {

    const keys = Object.keys(props.relatedResources);
    const values = Object.values(props.relatedResources);
    const [selectedTab, setSelectedTab] = useState(keys[0]);

    const onChangeHandler = (e, value) => {
        setSelectedTab(value);
    }

    return (
        <TabContext value={selectedTab}>
            <TabList
                centered
                className="tablist"
                onChange={onChangeHandler}
                textColor="primary"
                indicatorColor="primary"
                aria-label="tabs"
            >
                {keys.map((key) => (
                    <Tab key={key} value={key} label={key} />
                ))}
            </TabList>
            {values.map((value, index) => (
                <TabPanel key={keys[index]} value={keys[index]}>
                    <RelatedResourceList key={props.mainResourceData + '-' + value} mainResourceData={props.mainResourceData[keys[index]]} mainResourceType={props.mainResourceType} relatedResourceType={value} />
                </TabPanel>
            ))}
        </TabContext>
    );
}
export default Tabs;