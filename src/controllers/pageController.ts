import { Request, Response } from "express";
import { Contact } from "../models/Contact";

export const listContact = async (req: Request, res: Response) => {
    let contacts = await Contact.findAll(); 
    res.render('pages/list', {
        contacts
    });

}

export const newContact = (req: Request, res: Response) => {
    res.render('pages/form', {
        h2: 'Add new contact:',
        btn: 'Add'
    });
}

export const addContact = async (req: Request, res: Response) => {
    
    let name: string = req.body.name as string;
    let last: string = req.body.last as string;
    let number: string = req.body.number as string;
    let email: string = req.body.email as string;

    const contact = await Contact.create({
        name,
        lastname: last,
        tel: number,
        email
    });

    res.redirect('/');
}

export const editContact = async (req: Request, res: Response) => {

    let slug: string = req.params.slug;

    let contact = await Contact.findByPk(slug);

    console.log(contact)

    res.render('pages/form', {
        h2: 'Edit contact:',
        btn: 'edit',
        name: contact?.name,
        last: contact?.lastname,
        tel: contact?.tel,
        email: contact?.email
    });
}

 export const editContactPost = async (req: Request, res: Response) => {
    
    let id: string = req.params.slug;
    let name: string = req.body.name as string;
    let last: string = req.body.last as string;
    let number: string = req.body.number as string;
    let email: string = req.body.email as string;  

    await Contact.update({
        name,
        lastname: last,
        tel: number,
        email

    },{
        where:{
            id
        }
    })

    res.redirect('/');
 }

 export const deleteContact = async (req: Request, res: Response) => {
        let id: string = req.params.slug;
        await Contact.destroy({where:{id}})

        res.redirect('/');
}

