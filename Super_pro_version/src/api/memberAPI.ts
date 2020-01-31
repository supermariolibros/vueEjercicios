import { Member, createDefaultMember, MemberDetail, createDefaultMemberDetail } from "../model/member";

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data: any): Promise<Member[]> => {
  const members = data.map(gitHubMember => {
    var member: Member = createDefaultMember();

    member.id = gitHubMember.id;
    member.login = gitHubMember.login;
    member.avatar_url = gitHubMember.avatar_url;

    return member;
  });

  return Promise.resolve(members);
};

export const getAllMembers = (organizationName: string): Promise<Member[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};


export const getTheMember = (usermane: string): Promise<MemberDetail> => {
  const gitHubSpecificMembersUrl: string = `https://api.github.com/users/${usermane}`;

  return fetch(gitHubSpecificMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMemberDetails(data));
};


const resolveMemberDetails = (data: any): Promise<MemberDetail> => {
  const memberDetail = createDefaultMemberDetail();
        memberDetail.id = data.id;
        memberDetail.login = data.login;
        memberDetail.avatar_url = data.avatar_url;
        memberDetail.email = data.company;
        memberDetail.company = data.company;

  return Promise.resolve(memberDetail);
};