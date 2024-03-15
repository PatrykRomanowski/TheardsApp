import Theards from "../classes/theards";

const theardsDataInsideForMetric = new Theards();
const theardsDataOutsideForMetric = new Theards();

theardsDataInsideForMetric.addTheards("M");
theardsDataInsideForMetric.addTheards("G");
theardsDataInsideForMetric.addTheards("MT");
theardsDataInsideForMetric.addSize("M", "M10");
theardsDataInsideForMetric.addSize("M", "M12");
theardsDataInsideForMetric.addSize("G", "G1/8");
theardsDataInsideForMetric.addSize("MT", "M10");
theardsDataInsideForMetric.addPitch("M", "M12", "2.0", 10.5, 10.35, 10.65);
theardsDataInsideForMetric.addPitch("M", "M12", "2.2", 10.3, 10.15, 10.45);
theardsDataInsideForMetric.addPitch("M", "M12", "2.5", 10.1, 9.95, 10.25);
theardsDataInsideForMetric.addPitch("M", "M10", "1.5", 8.5, 8.35, 8.65);
theardsDataInsideForMetric.addPitch("G", "G1/8", "11W", 8.5, 8.35, 8.65);
theardsDataInsideForMetric.addPitch("MT", "M10", "1.5", 8.5, 8.35, 8.65);

theardsDataOutsideForMetric.addTheards("M");
theardsDataOutsideForMetric.addTheards("G");
theardsDataOutsideForMetric.addTheards("MT");
theardsDataOutsideForMetric.addSize("M", "M2");
theardsDataOutsideForMetric.addSize("M", "M4");
theardsDataOutsideForMetric.addSize("G", "G1/8");
theardsDataOutsideForMetric.addSize("MT", "M10");
theardsDataOutsideForMetric.addPitch("M", "M2", "0.250", 1.8, 1.75, 1.85);
theardsDataOutsideForMetric.addPitch("M", "M2", "0.3", 1.7, 1.6, 1.8);
theardsDataOutsideForMetric.addPitch("M", "M2", "2.5", 10.1, 9.95, 10.25);
theardsDataOutsideForMetric.addPitch("M", "M4", "1.5", 8.5, 8.35, 8.65);
theardsDataOutsideForMetric.addPitch("G", "G1/8", "11W", 8.5, 8.35, 8.65);
theardsDataOutsideForMetric.addPitch("MT", "M10", "1.5", 8.5, 8.35, 8.65);

export { theardsDataInsideForMetric, theardsDataOutsideForMetric };
