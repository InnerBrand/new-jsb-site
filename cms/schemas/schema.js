// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import homepage from './documents/homepage';
import teamPage from './documents/teams';
// Objects
import rte from './objects/rte';
import homepageObject from './objects/homepage-object';
import teamMember from './documents/teamMember';
import fact from './objects/fact';
import role from './documents/role';
import bigClaim from './objects/bigClaim';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    bigClaim,
    homepage,
    teamPage,
    teamMember,
    // products,
    homepageObject,
    fact,
    // navigation,
    // seoObject,
    role,
    rte,
    // link,
    // navItem,
    // subNavItem,
  ]),
});
