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

// Call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;
  // console.log(currentProfile);

  // const { name, image, age, gender, lookingfor, location } = currentProfile;

  console.log(currentProfile);

  if (currentProfile !== undefined) {
    document.getElementById('imageDisplay').innerHTML = `
    <img src=${currentProfile.image} alt="profile picture"/>
    `;

    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;
  } else {
    window.location.reload();
  }
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
