// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let hashtag = '#';

for (let i = 0; i < 7; i++) {
    console.log(hashtag);
    hashtag = hashtag + '#';
}