package de.effectivetrainings;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ViewController {
    @GetMapping("/")
    public ModelAndView renderView() {
        return new ModelAndView("index");
    }
}
