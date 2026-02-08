import GenericScreen from './GenericScreen';

function LishcaScreen() {
  // Define the specific data for this page
  const lishcaData = [
    { label: "אנ\"מ", href: "/anam" },
    { label: "בטיחות", href: "/safety" },
    { label: "מרפאה", href: "/clinic" },
    // ... more items
  ];

  return (
    // Pass the data array to the reusable component
    <GenericScreen itemsList={lishcaData} />
  );
}

export default LishcaScreen;
