import BottomNav from "../components/Bottamnav";

// src/pages/Saved.jsx
const Saved = () => {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Saved Articles</h1>
        <p className="text-gray-600">You don’t have any saved articles yet.</p>
        <BottomNav />
      </div>
    );
  };
  
  export default Saved;
  