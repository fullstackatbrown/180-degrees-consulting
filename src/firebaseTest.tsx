import { useState, useEffect} from "react";
import { firestore } from "./firebaseConfig";
import { collection } from "@firebase/firestore";

function FirebaseTest() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            // Replace "your_collection_name" with the actual name of your Firestore collection
            const dataRef = collection(firestore, "TestTeam");

            // Use the get() method to fetch data from the collection
            const snapshot = await getDocs(dataRef);

            // Extract the data from the snapshot and format it as needed
            const dataArr = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({
            id: doc.id,
            ...doc.data(),
            }));
        }
        // Update the state with the retrieved data
        setData(dataArr);
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
        }
        fetchData();}, []);

  return (
    <div>
      <h1>Your Firestore Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.fieldName}</li>
        ))}
      </ul>
    </div>
  );
}

export default FirebaseTest;
