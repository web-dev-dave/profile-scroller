const data = [
  {
    name: 'John Doe',
    age: '32',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Auckland NZ',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: '26',
    gender: 'Female',
    lookingfor: 'Male',
    location: 'Wellington NZ',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: '38',
    gender: 'Male',
    lookingfor: 'Female',
    location: 'Christchurch NZ',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  console.log(currentProfile);

  document.getElementById('imageDisplay').innerHTML = `
  <ul class="list-group">
    <img src=${currentProfile.image} alt="profile picture"/>
  </ul>
  `;

  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
    <li class="list-group-item text-center">Name: ${currentProfile.name}</li>
    <li class="list-group-item text-center">Age: ${currentProfile.age}</li>
    <li class="list-group-item text-center">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item text-center">Looking For: ${currentProfile.lookingfor}</li>
    <li class="list-group-item text-center">Location: ${currentProfile.location}</li>
    </ul>
  `;
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
