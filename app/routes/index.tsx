import { useEffect, useState } from "react";
import ZipCodeEntry from "~/components/zipcode-entry";

function onZipCodeChange(e: any) {
  console.log(e);
}

export default function Index() {
  const [waitLists, setWaitLists] = useState({});
  const [partySize, setPartySize] = useState(1);
  const [zipCode, setZipCode] = useState("");
  useEffect(() => {
    const init = async () => {
      const apiUrl =
        "https://www.texasroadhouse.com/texasroadhouse/waitlist/498/quote";
      const results = await fetch(apiUrl);
      const waitListResponse = await results.json();
      setWaitLists(waitListResponse);
    };

    init();
  }, []);
  const waitListsDiv = Object.keys(waitLists).map((w) => {
    return <div key={w}>{w}</div>;
  });
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ZipCodeEntry onZipCodeChange={onZipCodeChange} />
      {waitListsDiv}
    </div>
  );
}
