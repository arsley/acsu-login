const readlineSync = require('readline-sync'),
      axios = require('axios'),
      chalk = require('chalk');

const uid = readlineSync.question('Education number > ');
const pwd = readlineSync.question('Password > ', { hideEchoBack: true });

/**
 * @param {Promise object} response
 * @return {Boolean} [Return status of login]
 */
function assertLogin(response) {
  const status = response.data.match(/Login \w/)[0].split(' ');
  return status[1] === 'S' ? true : false;
}

axios
  .get('https://login.shinshu-u.ac.jp/cgi-bin/Login.cgi', {
    params: {
      uid: uid,
      pwd: pwd
    }
  })
  .then(function(response) {
    console.log(
      assertLogin(response)
        ? chalk.green(`Login Success.`)
        : chalk.red(`Login Failure.`)
    );
  })
  .catch(function(error) {
    console.error(chalk.red(error));
    console.info(chalk.blue('Send issue to author with error message!'));
  });
