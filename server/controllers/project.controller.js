import Project from '../models/project';

export function createProject(req, res) {
  let projectValues = {
    user: req.user ? req.user._id : undefined // eslint-disable-line no-underscore-dangle
  };

  projectValues = Object.assign(projectValues, req.body);

  Project.create(projectValues, (err, newProject) => {
    if (err) { return res.json({ success: false }); }
    Project.populate(newProject,
      {path: 'user', select: 'username'},
      (innerErr, newProjectWithUser) => {
        if (innerErr) { return res.json({ success: false }); }
        return res.json(newProjectWithUser);
    });
  });
}

export function updateProject(req, res) {
  Project.findByIdAndUpdate(req.params.project_id,
    {
      $set: req.body
    })
    .populate('user', 'username')
    .exec((err, updatedProject) => {
      if (err) { return res.json({ success: false }); }
      return res.json(updatedProject);
    });
}

export function getProject(req, res) {
  Project.findById(req.params.project_id)
    .populate('user', 'username')
    .exec((err, project) => {
      if (err) {
        return res.status(404).send({ message: 'Project with that id does not exist' });
      }

      return res.json(project);
    });
}

export function getProjects(req, res) {
  if (req.user) {
    Project.find({user: req.user._id}) // eslint-disable-line no-underscore-dangle
      .sort('-createdAt')
      .select('name files _id createdAt updatedAt')
      .exec((err, projects) => {
        res.json(projects);
      });
  } else {
    // could just move this to client side
    return res.json([]);
  }

}
