import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll!!!!"
      });
    });

    // Contact
    app
      .route("/contact")
      .get((req: Request, res: Response, next: NextFunction) => {
        // middleware
        if (req.query.key !== "50d8ef8d92e38ae7c19e4ae8450950f6f5d52166") {
          res.status(401).send("You shall not pass!");
        } else {
          next();
        }
      }, this.contactController.getContacts)
      .post(this.contactController.addNewContact);

    // Contact detail
    app
      .route("/contact/:contactId")
      // edit specific contact
      .get(this.contactController.getContactWithID)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
