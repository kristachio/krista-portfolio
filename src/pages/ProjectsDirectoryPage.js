import { Container } from 'reactstrap';
import ProjectsList from '../features/projects/ProjectsList';
import SubHeader from '../components/SubHeader';

const ProjectsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Projects' />
            <ProjectsList />
        </Container>
    );
};

export default ProjectsDirectoryPage;