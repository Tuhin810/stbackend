import { Request, Response } from "express";
import { deleteJobDetailsByJobId } from "../../service/jobs/jobService"; 

export const deleteJob = async (req: Request, res: Response) => {
    const jobId: string = req.params.jobId;

    if (!jobId) {
        return res.status(422).send({
            success: false,
            message: "Job ID is missing",
        });
    }

    try {
        
        const deletionResult = await deleteJobDetailsByJobId(jobId);

        if (deletionResult) {
            res.status(200).send({
                success: true,
                message: "Job deleted successfully",
            });
        } else {
            res.status(404).send({
                success: false,
                message: "Job not found",
            });
        }
    } catch (e) {
        res.status(500).send({
            success: false,
            message: "Error while deleting job",
            error: e,
        });
    }
};
