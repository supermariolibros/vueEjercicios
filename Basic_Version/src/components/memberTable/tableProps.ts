import { PropOptions } from 'vue';

export interface tableProps {
  organization: PropOptions<string>; 
}

export const createDefaultOrganization  = () => ({
    organization: "lemoncode"
});
  