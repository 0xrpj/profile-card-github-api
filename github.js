fetch("https://api.github.com/users/rsnpj")
    .then(response => response.json())
    .then((data) => {
        var hireable_status = data['hireable'] == null ? "No" : "Yes"
        var email = data['email'] == null ? "Not provided" : data['email']
        // document.getElementById("profile-pic").src = data['avatar_url']
        document.querySelector(".name").textContent = data['name']
        document.querySelector(".bio").textContent = data['bio']
        document.querySelector("#hirable").textContent = 'Hireable status: ' + hireable_status;
        document.querySelector("#email").textContent = 'Email address: ' + email;
        document.querySelector("#public_repo_count").textContent = 'Public repositories: ' + data['public_repos'];
        document.querySelector("#public_gists_count").textContent = 'Public gists: ' + data['public_gists'];
        document.querySelector("#created_at").textContent = 'Account created on: ' + data['created_at'].slice(0, 10);
        document.querySelector("#following_count").textContent = data['following']
        document.querySelector("#followers_count").textContent = data['followers']
    })

fetch("https://api.github.com/users/rsnpj/repos")
    .then(response => response.json())
    .then((data) => {
        for (var i = 0; i < data.length; i++) {
            if (!data[i].fork) {
                console.log(data[i].name)
                document.querySelector(".public-repos").innerHTML += data[i].name + '<br/><br/>';
            } else {
                document.querySelector(".forked-repos").innerHTML += data[i].name + '<br/><br/>';
            }
        }
    })
