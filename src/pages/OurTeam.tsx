import { render } from "react-dom";
import Header from "../components/HeaderComponents/Header";
import Footer from "../components/Footer";

import GroupPhoto from "../components/OurTeamComponents/GroupPhoto"
/*import ExecutiveBoard from "../components/OurTeamComponents/ExecutiveBoard"
import TeamLeads from "../components/OurTeamComponents/TeamLeads"*/
import SeniorAdvisers from "../components/OurTeamComponents/SeniorAdvisers"
import { createBucketClient } from '@cosmicjs/sdk';
import { useEffect, useState } from "react";
import ExecutiveBoard from "../components/OurTeamComponents/ExecutiveBoard";
import { BoardMember } from '../components/OurTeamComponents/Types'

// Define an async function to fetch club information from Cosmic JS
async function fetchMembersInfo() {
  const cosmic = createBucketClient({
    bucketSlug: import.meta.env.VITE_BUCKET_SLUG,
    readKey: import.meta.env.VITE_BUCKET_READ_KEY,
  });

  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['title', 'metadata'])

    return response.objects;
  } catch (error) {
    console.error('Error fetching club information:', error);
    return [];
  }
}

function OurTeam() {

  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const fetchedInfo : [{metadata : BoardMember}] = await fetchMembersInfo();
        const data = fetchedInfo.map(info => info.metadata)
        setBoardMembers(data);
      } catch (error) {
        console.error('Failed to fetch info:', error);
      }
    })();
  }, []);


    return (<>
    <Header/>
    <GroupPhoto/>
    <SeniorAdvisers/>
    <ExecutiveBoard boardMembers={boardMembers} />
    <Footer/>
    </>
  );
}

export default OurTeam;
