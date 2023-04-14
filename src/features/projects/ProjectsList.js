import { Col, Row } from 'reactstrap';
import { PROJECTS } from '../../app/shared/PROJECTS';
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
    return (
        <Row className='ms-auto'>
            {PROJECTS.map((project) => {
                return (
                    <Col 
                        md='5' 
                        className='m-4' 
                        key={project.id}
                        >
                        <ProjectCard project={project} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProjectsList;