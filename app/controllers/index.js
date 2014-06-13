var gridLayout = $.gridLayout;

var view1 = Ti.UI.createView();
view1.layout = 'vertical';
var label1 = Ti.UI.createLabel({
    text: 'MSWM, Merrill Lead Barron’s Top Female Advisors List - ' + Ti.Platform.version,
    font : {
        fontSize : '14dp',
        fontFamily : 'Helvetica Neue',
        fontWeight : 'bold'
    }
});
var label11 = Ti.UI.createLabel({
    text: 'The average member of the top-100 list manages $3.5 billion, up 25% from 2012.',
    font : {
        fontSize : '12dp',
        fontFamily : 'Helvetica Neue'
    }
});
view1.add(label1);
view1.add(label11);

var view2 = Ti.UI.createView();
view2.layout = 'vertical';
var label2 = Ti.UI.createLabel({
    text: 'NYC Pensions Issue $5B Fixed Income RFP',
    font : {
        fontSize : '14dp',
        fontFamily : 'Helvetica Neue',
        fontWeight : 'bold'
    }
});
var label22 = Ti.UI.createLabel({
    text: 'The $150 billion New York City Pension Funds is searching for managers to take on $4 billion to $5 billion in inflation-protected fixed income mandates.',
    font : {
        fontSize : '12dp',
        fontFamily : 'Helvetica Neue'
    }
});
var image2 = Ti.UI.createImageView({
    image: '/images/image.jpeg'
});
view2.add(label2);
view2.add(label22);
view2.add(image2);

var view3 = Ti.UI.createView();
view3.layout = 'vertical';
var label3 = Ti.UI.createLabel({
    text: 'Salient Expands Control over Calif. Pension in OCIO Coup',
    font : {
        fontSize : '14dp',
        fontFamily : 'Helvetica Neue',
        fontWeight : 'bold'
    }
});
var label33 = Ti.UI.createLabel({
    text: 'Salient Partners has gained more control over the $9.8 billion San Diego County Employees Retirement Associations total portfolio.',
    font : {
        fontSize : '12dp',
        fontFamily : 'Helvetica Neue'
    }
});
view3.add(label3);
view3.add(label33);

var view4 = Ti.UI.createView();
view4.layout = 'vertical';
var label4 = Ti.UI.createLabel({
    text: 'Placement Agents Barred from NYC Pension Funds',
    font : {
        fontSize : '14dp',
        fontFamily : 'Helvetica Neue',
        fontWeight : 'bold'
    },
    top: 5,
    left: 5
});
var label44 = Ti.UI.createLabel({
    text: 'A scandal was exposed in 2009 over payments to former state comptroller Alan Hevesi in exchange for steering investment business to a private manager.',
    font : {
        fontSize : '12dp',
        fontFamily : 'Helvetica Neue'
    },
    top: 5,
    left: 5
});
view4.add(label4);
view4.add(label44);

var view5 = Ti.UI.createView();
view5.layout = 'vertical';
var label5 = Ti.UI.createLabel({
    text: 'Guggenheim Launches Consultant Coverage with New Team',
    font : {
        fontSize : '14dp',
        fontFamily : 'Helvetica Neue',
        fontWeight : 'bold'
    }
});
var label55 = Ti.UI.createLabel({
    text: 'Guggenheim Partners has hired Glenn Weiner to lead its first formal investment consultant team.',
    font : {
        fontSize : '12dp',
        fontFamily : 'Helvetica Neue'
    }
});
view5.add(label5);
view5.add(label55);

var view6 = Ti.UI.createView();
view6.layout = 'vertical';
var label6 = Ti.UI.createLabel({
    text: 'Five JP Morgan Pension Execs Join New OCIO',
    font : {
        fontSize : '14dp',
        fontFamily : 'Helvetica Neue',
        fontWeight : 'bold'
    }
});
var label66 = Ti.UI.createLabel({
    text: 'Richard Sabo has been named CEO of the investment management firm formed in February with backing from JZ Capital Partners.',
    font : {
        fontSize : '12dp',
        fontFamily : 'Helvetica Neue'
    }
});
view6.add(label6);
view6.add(label66);

var view7 = Alloy.createController('canvas').getView();

gridLayout.addView(view1);
gridLayout.addView(view2, 2);
gridLayout.addView(view3, 2);
gridLayout.addView(view4);
gridLayout.addView(view5);
gridLayout.addView(view6);
gridLayout.addView(view7);

var styles = {
    borderColor: 'gray',
    borderWidth: 1
};
gridLayout.setCellStyles(styles);

gridLayout.render();

$.win.open();
