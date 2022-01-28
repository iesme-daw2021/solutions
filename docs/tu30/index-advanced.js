const btnAddMore = document.querySelector('button');
const btnRetrieve = btnAddMore.nextElementSibling;
const divForm = document.querySelector('.form');
const divInput = divForm.lastElementChild;
const divResults = btnRetrieve.nextElementSibling;

btnAddMore.addEventListener('click', (event) => {
  divForm.appendChild(divInput.cloneNode(true));
});

btnRetrieve.addEventListener('click', async (event) => {
  clearUsers();
  toggleLoading();
  userNames = getUserNames();

  // This is the business logic. All the other is the UI layer
  const gitHubUsers = await getGitHubUsers(userNames);

  toggleLoading();
  showUsers(gitHubUsers);
});

function getUserNames() {
  const list = [];
  document.querySelectorAll('input').forEach((input) => {
    list.push(input.value);
  });
  return list;
}

async function getGitHubUsers(userNames) {
  const promises = [];
  for (let userName of userNames) {
    const promiseUser = fetch('https://api.github.com/users/' + userName).then(
      (resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          return null;
        }
      }
    );
    promises.push(promiseUser);
  }

  const users = await Promise.all(promises);

  return users;
}

function toggleLoading() {
  if (divResults.hasChildNodes()) {
    divResults.childNodes.forEach((element) => {
      element.remove();
    });
  } else {
    const loading = document.createElement('span');
    loading.textContent = 'Loading';
    divResults.append(loading);
  }
}

function showUsers(users) {
  try {
    const list = document.createElement('ul');
    for (let user of users) {
      const li = document.createElement('li');
      li.textContent = user.name;
      list.append(li);
    }
    divResults.append(list);
  } catch (error) {
    if (error.name === 'TypeError') {
      // Do nothing
    } else {
      throw error;
    }
  }
}

function clearUsers() {
  if (divResults.hasChildNodes()) {
    divResults.querySelector('ul').remove();
  }
}
