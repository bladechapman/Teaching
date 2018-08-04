import UIKit

@IBDesignable class RatingControl: UIStackView {
    
    var rating = 0
    private var ratingButtons = Array<UIButton>()
    
    @IBInspectable var starSize: CGSize = CGSize(width: 44.0, height: 44.0) {
        didSet {
            setupButtons()
        }
    }
    @IBInspectable var startCount: Int = 7 {
        didSet {
            setupButtons()
        }
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupButtons()
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        setupButtons()
    }
    
    private func setupButtons() {
        // clear existing buttons
        for button in ratingButtons {
            removeArrangedSubview(button)
            button.removeFromSuperview()
        }
        ratingButtons.removeAll()
        
        // set up new buttons
        for _ in 0..<startCount {
            let button = UIButton()
            button.backgroundColor = UIColor.red
            
            button.translatesAutoresizingMaskIntoConstraints = false
            button.heightAnchor.constraint(equalToConstant: starSize.height).isActive = true
            button.widthAnchor.constraint(equalToConstant: starSize.width).isActive = true
            
            button.addTarget(
                self,
                action: #selector(RatingControl.ratingButtonTapped(button:)),
                for: UIControlEvents.touchUpInside)
            
            self.addArrangedSubview(button)
            
            ratingButtons.append(button)
        }
    }
    
    @objc
    func ratingButtonTapped(button: UIButton) {
        print("Button pressed 👍")
    }

}
