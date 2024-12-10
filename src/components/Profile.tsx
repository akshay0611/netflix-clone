export const Profile = () => {
  const user = {
    name: "Akshay Kumar",
    email: "akshaykumar@example.com",
    profilePicture: "https://via.placeholder.com/100", // Placeholder image
    description: "Primary Account",
    membership: "Netflix Premium",
    memberSince: "Jan 2021",
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white overflow-y-auto pt-24">
      {/* Profile Card */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header with Gradient Background */}
        <div className="bg-gradient-to-r from-purple-600 to-red-600 p-8 text-center">
          <img
            src={user.profilePicture}
            alt={`${user.name}'s profile`}
            className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-lg mb-4"
          />
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-gray-300">{user.description}</p>
        </div>

        {/* Profile Details Section */}
        <div className="p-6 space-y-6">
          <div className="flex justify-between border-b border-gray-700 pb-4">
            <span className="text-gray-400">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-4">
            <span className="text-gray-400">Membership:</span>
            <span>{user.membership}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Member Since:</span>
            <span>{user.memberSince}</span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="p-6 space-y-4">
          <button className="w-full bg-red-600 py-3 rounded-md font-medium hover:bg-red-700">
            Edit Profile
          </button>
          <button className="w-full bg-blue-600 py-3 rounded-md font-medium hover:bg-blue-700">
            Switch Profile
          </button>
          <button className="w-full bg-gray-700 py-3 rounded-md font-medium hover:bg-gray-800">
            Account Settings
          </button>
          <button className="w-full bg-gray-700 py-3 rounded-md font-medium hover:bg-gray-800">
            Help Center
          </button>
        </div>

        {/* Log Out Button */}
        <div className="p-6">
          <button className="w-full bg-gray-500 py-3 rounded-md font-medium hover:bg-gray-600">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
