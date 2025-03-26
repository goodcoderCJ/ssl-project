
import ProfileCard from "@/components/profileCard";




const profiles  = [
  { name: "Davina", age: 23, location: "Abuja", match: 85, image: "/Nft1.png",verified:true },
  { name: "Emily", age: 31, location: "Lagos", match: 80, image: "/Nft2.png",verified:true },
  { name: "John", age: 28, location: "Delta", match: 72, image: "/Nft3.png",verified:true },
  { name: "Davina", age: 23, location: "Abuja", match: 85,image:"/Nft4.png", verified: true },
  { name: "Emily", age: 31, location: "Lagos", match: 80,image:"/Nft5.png", verified: false },
  { name: "John", age: 28, location: "Delta", match: 72,image:"/Nft6.png", verified: true },
  { name: "Mads", age: 26, location: "", match: 77,image:"/Nft2.png", verified: false },
  { name: "Love", age: 26, location: "Lagos", match: 80,image:"/Image (9).png", verified: false },
  { name: "Karen", age: 23, location: "Abuja", match: 85,image:"/Nft1.png", verified: false },
  { name: "Sharon", age: 24, location: "Lagos", match: 80,image:"/Nft6.png", verified: false },
  { name: "Kevin", age: 30, location: "PH", match: 70,image:"/Nft5.png", verified: true },
  { name: "Lily", age: 25, location: "Lagos", match: 89,image:"/Nft3.png", verified: false },
  { name: "Vivian", age: 27, location: "Edo", match: 71,image:"/Nft4.png", verified: false },
  { name: "Jack", age: 30, location: "Lagos", match: 87,image:"/Nft2.png", verified: false },
  { name: "Dave", age: 26, location: "Lagos", match: 80,image:"/Nft1.png", verified: false }
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
          <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <p>Welcome, Temiloluwa</p>
          <div>
            <label className="mr-2">Relationship Type:</label>
            <select className="p-1 border rounded">
              <option>Dating</option>
            </select>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {profiles.map((profile, idx) => (
            <ProfileCard key={idx} name={profile.name} age={profile.age} location={profile.location} match={profile.match} image={profile.image} verified={profile.verified} />
          ))}
        </div>
      </div>
  );
}
