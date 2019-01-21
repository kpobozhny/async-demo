console.log('Before');
// getUser(1, (user) => {
//     getRepositories(user.githubUsername, (repositories) => {
//         getCommits(repositories[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

// Promise-based approach
/*getUser(1)
    .then(user => getRepositories(user.githubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error', err.message));
*/
// Async and Await approach
async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.githubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err){
        console.log('Error', err.message);
    }

}
displayCommits()

console.log('After');


function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading a user from a database..');
            resolve({id: id, githubUsername: 'mosh'});
          }, 2000);
    });
}

function getRepositories(username){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading a repository data..');
            resolve(['repo 1', 'repo 2', 'repo 3']);
            //reject(new Error('message'));
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading commits data..');
            resolve(['commit 1', 'commit 2']);
        }, 2000);
    });

}