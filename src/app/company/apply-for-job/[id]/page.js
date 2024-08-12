import dynamic from 'next/dynamic'
const JobDetailsPage = dynamic(() => import('../../../../components/JobDetailsPage/JopDetailsPage'))
const page = () => {
  return (
      <JobDetailsPage />
  );
};

export default page;
