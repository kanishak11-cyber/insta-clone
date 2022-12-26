import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

function Stories() {
  const [ suggestions, setSuggestions ] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId : faker.datatype.uuid(),
      username : faker.internet.userName(),
      avatar : faker.image.avatar(),
      email : faker.internet.email(),
      password : faker.internet.password(),
      birthdate : faker.date.birthdate(),
      registeredAt : faker.date.recent(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
      {/* Story*/}
    </div>
  )
}
export default Stories;
