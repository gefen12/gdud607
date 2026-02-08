import GenericScreen from './GenericScreen';

function PalsamScreen() {
  // Define the specific data for this page
  const palsamData = [
    { label: "לוגיסטיקה", href: "/logistics" },
    { label: "רכב", href: "/vehicle" },
    { label: "מטבח", href: "/kitchen" },
    { label: "חינוך", href: "/education" },
    { label: "תקשוב", href: "/tech" },
    { label: "טנ\"א", href: "/tana" },
    { label: "חינוך גופני", href: "/physicalEducation" },
    { label: "רפואה", href: "/medicine" },
    { label: "משא\"ן", href: "/help" },
    // ... more items
  ];

  return (
    // Pass the data array to the reusable component
    <GenericScreen itemsList={palsamData} />
  );
}

export default PalsamScreen;