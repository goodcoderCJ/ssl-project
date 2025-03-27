import Image from "next/image";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid-container grid grid-cols-[10%_29%_35%_5%_10%_5%_5%_1%] grid-rows-[10%_30%_45%_10%_5%]">
        {/* Profile Header */}
        <div className="col-start-1 col-end-9 row-start-1 row-end-2 rounded-lg mt-4">
          <div className="flex relative">
            <Image
              src="/profile-backgd.png"
              width={500}
              height={20}
              alt="Cover"
              className="object-cover rounded-lg flex-1"
            />
          </div>
        </div>

        {/* Profile Picture and Info */}
        <div className="relative flex items-center gap-4 col-start-2 col-end-8 row-start-3 row-end-5">
          <div className="flex gap-3">
            <div className="relative ">
              <Image
                src="/travel-agent3.png"
                alt="Profile"
                width={100}
                height={80}
                className=""
              />
              <button className="absolute -bottom-2 -right-4 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                +
              </button>
            </div>
            <div className="mt-[2rem]">
              <h2 className="text-[0.7rem] font-bold">Temiloluwa, 27</h2>
              <p className="text-[0.6rem]">Lagos</p>
            </div>
          </div>

          {/*Buttons container*/}
          <div className="ml-auto mt-18 flex gap-2">
            <button className="bg-red-500 text-white text-[0.7rem] px-4 py-1 rounded-md h-10">
              Edit Profile
            </button>
            <button className="bg-red-500 text-[0.7rem] text-white px-4 py-1 rounded-md h-10">
              Edit Match Setup
            </button>
          </div>
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
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-20 h-20 border flex items-center justify-center text-gray-400"
          >
            Add Photo
          </div>
        ))}
      </div>

      {/* Hobbies & Interests Section */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">My Hobbies</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Laying on the Beach",
              "Biking",
              "Cooking",
              "Dancing",
              "Museums & Arts",
            ].map((hobby, i) => (
              <span
                key={i}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">My Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Travel",
              "Drawing",
              "History",
              "Woodworking",
              "Photography",
              "Poetry",
              "Knitting",
            ].map((interest, i) => (
              <span
                key={i}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-bold mb-2">About Me</h3>
          <ul className="text-sm text-gray-600">
            <li>
              <strong>Gender:</strong> Male
            </li>
            <li>
              <strong>Age:</strong> 27
            </li>
            <li>
              <strong>Occupation:</strong> Engineer
            </li>
            <li>
              <strong>Relationship:</strong> Single
            </li>
            <li>
              <strong>Location:</strong> Lagos
            </li>
            <li>
              <strong>Height Range:</strong> 5’5 - 6’0
            </li>
            <li>
              <strong>Weight Range:</strong> 60 - 70kg
            </li>
            <li>
              <strong>Religion:</strong> Christianity
            </li>
            <li>
              <strong>Nationality:</strong> Nigerian
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
