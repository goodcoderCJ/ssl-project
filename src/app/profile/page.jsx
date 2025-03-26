

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
     
      

      {/* Profile Header */}
      <div className="relative bg-gray-200 h-40 w-full rounded-lg mt-4 flex items-center justify-center">
        <img
          src="/images/cover.jpg"
          alt="Cover"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-sm rounded">
          Update Cover
        </button>
      </div>

      {/* Profile Picture and Info */}
      <div className="relative flex items-center gap-4 p-4">
        <div className="relative">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            +
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold">Temiloluwa, 27</h2>
          <p className="text-gray-500">Lagos</p>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded-md">
            Edit Match Setup
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-4">
        <textarea
          className="w-full border p-2 rounded-md"
          placeholder="A few words about myself"
        ></textarea>
      </div>

      {/* Photo Upload Section */}
      <div className="flex gap-4 mt-4">
        <div className="w-20 h-20 border flex items-center justify-center">
          <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-20 h-20 border flex items-center justify-center text-gray-400">
            Add Photo
          </div>
        ))}
      </div>

      {/* Hobbies & Interests Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">My Hobbies</h3>
          <div className="flex flex-wrap gap-2">
            {["Laying on the Beach", "Biking", "Cooking", "Dancing", "Museums & Arts"].map(
              (hobby, i) => (
                <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>
              )
            )}
          </div>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">My Interests</h3>
          <div className="flex flex-wrap gap-2">
            {["Travel", "Drawing", "History", "Woodworking", "Photography", "Poetry", "Knitting"].map(
              (interest, i) => (
                <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {interest}
                </span>
              )
            )}
          </div>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">About Me</h3>
          <ul className="text-sm text-gray-600">
            <li><strong>Gender:</strong> Male</li>
            <li><strong>Age:</strong> 27</li>
            <li><strong>Occupation:</strong> Engineer</li>
            <li><strong>Relationship:</strong> Single</li>
            <li><strong>Location:</strong> Lagos</li>
            <li><strong>Height Range:</strong> 5’5 - 6’0</li>
            <li><strong>Weight Range:</strong> 60 - 70kg</li>
            <li><strong>Religion:</strong> Christianity</li>
            <li><strong>Nationality:</strong> Nigerian</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;