import GenericScreen from './GenericScreen';

function PlugotLScreen() {
  // Define the specific data for this page
  const plugotlData = [
    { label: "פלוגה א'", href: "/a" },
    { label: "פלוגה ב'", href: "/b" },
    { label: "פלוגה ג'", href: "/c" },
    { label: "פלוגה ד'", href: "/d" },
    { label: "פלוגת צמ\"ה'", href: "/tzmah" },
    { label: "פלוגת רובוטיקה", href: "/robotics" },
    // ... more items
  ];

  return (
    // Pass the data array to the reusable component
    <GenericScreen itemsList={plugotlData} />
  );
}

export default PlugotLScreen;