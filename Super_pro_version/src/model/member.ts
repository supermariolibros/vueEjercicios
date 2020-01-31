export interface Member {
  id: number;
  login: string;
  avatar_url: string;
}

export interface MemberDetail extends Member {
  email: string;
  company: string;
}

export const createDefaultMember = () => ({
  id: -1,
  login: "",
  avatar_url: ""
});

export const createDefaultMemberDetail = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  email:"",
  company:"",
});
