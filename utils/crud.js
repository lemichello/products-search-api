var getOne = model => async (req, res) => {
  try {
    const doc = await model.findById(req.params.id).exec();

    if (!doc) {
      return res.status(404).end();
    }

    return res.json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

var getMany = model => async (req, res) => {
  try {
    const docs = await model.find().exec();

    return res.json(docs);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

var createOne = model => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body });
    return res.status(201).json(doc);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

var removeOne = model => async (req, res) => {
  try {
    const removed = await model.findByIdAndRemove(req.params.id);

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json(removed);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

module.exports = model => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  removeOne: removeOne(model)
});
