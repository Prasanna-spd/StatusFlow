import { getOrganization } from '@/actions/organizations';
import OrgSwitcher from '@/components/org-switcher';
import React from 'react'
import ProjectList from './_components/project-list';

interface OrganizationProps {
  params: {
    orgId: string;
  };
}


async function Organization({params}:OrganizationProps) {

  const organization = await getOrganization(params.orgId);

  
  return (
    <div className="container mx-auto px-4">
    <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
      <h1 className="text-5xl font-bold gradient-title pb-2">
        {organization?.name}&rsquo;s Projects
      </h1>

      <OrgSwitcher />
    </div>
    <div className="mb-4">
      <ProjectList orgId={organization?.id} />
    </div>
    {/* <div className="mt-8">
      <UserIssues userId={userId} />
    </div> */}
  </div>
  )
}

export default Organization