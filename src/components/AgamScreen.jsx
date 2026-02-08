import GenericScreen from './GenericScreen';

function AgamScreen() {
  // Define the specific data for this page
  const agamData = [
    { label: "מבצעים", href: "/special" },
    { label: "מודיעין", href: "/info" },
    // ... more items
  ];

  return (
    // Pass the data array to the reusable component
    <GenericScreen itemsList={agamData} />
  );
}

export default AgamScreen;