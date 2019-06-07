// export const USER_FRAGMENT = `
//   fragment UserParts on User {
//     id
//     username
//     email
//     firstName
//     lastName
//     bio
//     posts {
//       id
//       caption
//     }
//   }
// `

export const USER_FRAGMENT = `
  fragment UserParts on User {
    id
    username
  }
`;

export const COMMENT_FRAGMENT = `
  fragment CommentParts on Comment {
    id
    text
    user {
      ${USER_FRAGMENT}
    }
  }
`;


export const FILE_FRAGMENT = `
  fragment FileParts on File {
    id
    url
  }
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    id
    location
    caption
    files {
      ${FILE_FRAGMENT}
    }
    comments {
      ${COMMENT_FRAGMENT}
    }
    user {
      ${USER_FRAGMENT}
    }
  }
`;