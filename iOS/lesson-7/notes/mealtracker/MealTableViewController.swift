//
//  MealTableViewController.swift
//  mealtracker
//
//  Created by Blade Chapman on 8/11/18.
//  Copyright © 2018 Blade Chapman. All rights reserved.
//

import UIKit

class MealTableViewController: UITableViewController {

    var meals = Array<Meal>()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        loadSampleMeals()
        
        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false

        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem
    }

    func loadSampleMeals() {
        let defaultPhoto = UIImage(named: "defaultPhoto")
        guard let meal1 = Meal(name: "Caprese Salad", photo: defaultPhoto, rating: 4) else {
            fatalError("Unable to instantiate meal 1")
        }
        
        guard let meal2 = Meal(name: "Chicken and Potatoes", photo: defaultPhoto, rating: 1) else {
            fatalError("Unable to instantiate meal 2")
        }
        
        guard let meal3 = Meal(name: "Pasta with Meatballs", photo: defaultPhoto, rating: 3) else {
            fatalError("Unable to instantiate meal 3")
        }
        
        meals.append(meal1)
        meals.append(meal2)
        meals.append(meal3)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return meals.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellIdentifier = "MealTableViewCell"
        guard let cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifier, for: indexPath) as? MealTableViewCell else {
            fatalError("The dequeued cell is not an instance of MealTableViewCell.")
        }
        
        let meal = meals[indexPath.row]
        cell.mealLabel.text = meal.name
        cell.photoImageView.image = meal.photo
        cell.ratingControl.rating = meal.rating

        return cell
    }

    /*
    // Override to support conditional editing of the table view.
    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }
    */

    /*
    // Override to support editing the table view.
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            // Delete the row from the data source
            tableView.deleteRows(at: [indexPath], with: .fade)
        } else if editingStyle == .insert {
            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
        }    
    }
    */

    /*
    // Override to support rearranging the table view.
    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {

    }
    */

    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the item to be re-orderable.
        return true
    }
    */

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

    @IBAction func unwindToMealList(sender: UIStoryboardSegue) {
        let sourceViewController = sender.source as? MealViewController
        let meal = sourceViewController?.meal
        
        if sourceViewController != nil && meal != nil {
            
            // Add a new meal.
            let newIndexPath = IndexPath(row: meals.count, section: 0)
            
            meals.append(meal!)
            tableView.insertRows(at: [newIndexPath], with: .automatic)
        }
    }
}
